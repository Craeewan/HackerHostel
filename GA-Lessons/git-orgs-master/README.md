# Git Organizations and Branching

![git merge](https://i.imgur.com/X9zNSkM.gif)

Today we are going to go over how to create a git organization and how we can work collaboratively on code

## Create your organization

first things first, let's create a git organiztion that will contain all of the members of your team.


1. In the **new** dropdown menu, select **new organization**. 



![new orgs](https://i.imgur.com/oCf1SPD.png)  



2. Then come up with an awesome team name and select one of your members to provide their email. This person will now be referred to as the git czar/tsar depending on your preferred Slovic studies.  
![new team](https://i.imgur.com/fsJBZeg.png)  



3. Now that your organization is ceated, send out invites to the rest of your team.  
![invites](https://i.imgur.com/Dnkq3SH.png) 



4. Congrats, you have now created your first git organiztion. now you can create your repo and you would normally. However, now we don't have to fork, you will each clone this shared repo, pushing to and pulling from it.   
![repo](https://i.imgur.com/H2DLRox.png)  



## Making Branches
Now that you have your organization setup and your git tsar assigned, it's time to talk a little bit about branching  

We all know that when you first create a repo, you start of on `master`. Quick trade secret, you should not be working on `master`, that branch should be reserved for production aka your deployed app. 

![aster](https://i.imgur.com/Q9H6XhT.png)

So, we will start by creating a `dev` branch. This will be the "master" branch that we will be doing our development work on.  
![dev](https://i.imgur.com/w1gPvHf.png)  

But wait there's more. The `dev` branch will be the amalgamate of your team's work, and will be managed by your git tsar. As you work on features, you will want to create additional branches that are reflective of what feature you are working on  

Let's say, you are working on making a button that does something. You could make a branch called `button`.  

![button](https://i.imgur.com/Lcoq91E.png)


Once you finish your work, now it's time to push to **your feature branch** to get it to github. Then we can create a pull request.  
### THIS IS IMPORTANT!!!!
`git add.`    
`git commit -m '<commit message>'`  
`git push origin <feature branch>`  
### MAKE SURE YOU PUSH TO YOUR FEATURE BRANCH!!!!!  

![PR](https://i.imgur.com/uNWAwfp.png)  
![pr2](https://i.imgur.com/DRWFyPg.png)
![merge](https://i.imgur.com/0ntXTiW.png)
![complete](https://i.imgur.com/IL7Y35F.png)


A pull request is a request to merge two branches. But since we don't want cowboy commits, messing up our version control, to take place, we defer merge responsibility to the git tsar. The git tsar will reveiw the pull request made, and pending no conflicts, will merge the PR into the `dev` branch, so that everyone can pull new, **approved** commits and work. 

## Conflicts
Sometimes, you will get a scary message that looks like this
![mrege conflict](https://i.imgur.com/9mU0ZyB.png)  

But don't worry, it's just a `merge conflict`. A merge conflict occurs when the same branch has been worked on separately, and has out of sync commits. When you get a merge conflict, you will see what file this occurred in from the error message in terminal. In the file, they look like this.
![merge](https://i.imgur.com/8Y6fU9t.png)
and we fix them by deleting the changes that we don't want. Simple. Then add, commit, push, and be on your merry way

## Project Management

Being a project manager is a tough job, and keeping track of who is doing what tasks can get confusing. But luckily there are apps that help us manage our workflow. 

One of the most common is Jira, which works by issuing tickets to your team members, describing what they need to do and the priority. It is a very popular app in the wild  
[Jira](https://www.atlassian.com/software/jira)

Another easy to use project work flow app is Trello. Trello works like a big cork board, where you can assign tasks with details. It's a little more custamizable that Jira, also it's free  
[Trello](https://trello.com/)

And there's an extension that works directly with github  
[ZenHub](https://www.zenhub.com/thank-you?redirect=https%3A%2F%2Fgithub.com)



