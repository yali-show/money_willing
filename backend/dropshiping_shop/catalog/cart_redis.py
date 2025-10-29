# catalog/cart_redis.py
import redis
from django.conf import settings

r = redis.Redis(
    host='localhost',
    port=6379,
    db=0,
    decode_responses=True
)

def get_cart_key(user_id):
    return f"cart:{user_id}"

def add_to_cart(user_id, product_id, quantity=1):
    key = get_cart_key(user_id)
    r.hincrby(key, product_id, quantity)

def remove_from_cart(user_id, product_id, quantity=None):
    key = get_cart_key(user_id)
    if quantity:
        r.hincrby(key, product_id, -quantity)
        if int(r.hget(key, product_id)) <= 0:
            r.hdel(key, product_id)
    else:
        r.hdel(key, product_id)

def get_cart(user_id):
    key = get_cart_key(user_id)
    return r.hgetall(key)

def clear_cart(user_id):
    key = get_cart_key(user_id)
    r.delete(key)

