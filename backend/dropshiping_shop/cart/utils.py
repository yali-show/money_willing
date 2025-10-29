import json
import redis
from django.conf import settings

redis_client = redis.Redis.from_url(settings.REDIS_URL)

def _cart_key(user_or_session):
    return f"cart:{user_or_session}"

def add_item(user_or_session, product_id, qty, snapshot):
    key = _cart_key(user_or_session)
    product_id = str(product_id)
    data = redis_client.hget(key, product_id)
    if data:
        item = json.loads(data)
        item["qty"] += qty
    else:
        item = {"product_id": product_id, "qty": qty, **snapshot}

    redis_client.hset(key, product_id, json.dumps(item))
    redis_client.expire(key, 60 * 60 * 24 * 7)

def remove_item(user_or_session, product_id):
    key = _cart_key(user_or_session)
    redis_client.hdel(key, product_id)

def get_cart(user_or_session):
    key = _cart_key(user_or_session)
    raw = redis_client.hgetall(key)
    return [json.loads(v) for v in raw.values()]

def clear_cart(user_or_session):
    redis_client.delete(_cart_key(user_or_session))

