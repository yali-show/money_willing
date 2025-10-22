Author: Ilya Bilyi

Colaborator: Hugo Sastre


# Git flow 

Branches:
    
    main
    |---dev
        |---dev_front
        |---dev_back

Try not pass comments in commits


Eeach `feature` must have correspondent branch. If you make changes (not a new feature) must do commit for it.

#### **Naming of feature:**

```example 
You want add new page on the frontend with new functionality.
For example new page with filters.
New functionality called a feature.
```
You should checkout to `dev_frontend` branch, than than make

```git
#git baranch feature/<name-of-the-feature> 
git branch feature/filter-page

#git checkout feature/<name-of-the-feature>
git checkout feature/filter-page
```

Then you can make changes here and while it works create commits

```git
#git add <files to add to commit>
git add . # add all files in our case

#git commit -m "feature/<current commit changes>"
git commit -m "feature/filters template added"

Makes some changes for the same feature...

#git add <files to add to commit>
git add . # add all files in our case

#git commit -m "feature/<current commit changes>"
git commit -m "feature/database connection"
```

Then send it to remote storage.

```git

git push origin <branch name>

```

What if you commited shit? 

Code that does not work or have bugs?

You should work in the same branch. 

For example in this case it will be `feature/filter-page`.

But after refactoring/debugging you should makes commits with another name.

```git

#git add <files to add to commit>
git add . # add all files in our case

#git commit -m "bugfix/<current commit changes>"
git commit -m "bugfix/database connection fix"

git push origin <branch name>
```


#### **Merge flow:**

When you done your feature and you are sure 100% it is okey, then let's merge it into `dev_frontend` in our case

do merges in github 

If you have the working version (all trello tasks done with no bugs) - send code for review and merge request to dev branch

do merges requests in github 

After my review will be merged to dev branch and then i'll merge everything to main with documentation

# Agreements

The package and code or projects made using data from repository can not be shared without agreement of authors.

All services/web pages created using code from the repo will be author's property.

Do not use package for illegal activities.

I will develop the main core and backend, and will help understand docker and Django basics

If you makes commit - you are agree with all this data from RULESandAGREEMENTS file
