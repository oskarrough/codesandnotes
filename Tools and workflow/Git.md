# Git

intro to git
references

## Tips

**Commit local changes**
git add .
git commit -m "message"

**Pull remote changes (with rebase)**
git pull --rebase

1. Temporarily stash your local commits,
2. Pull the online commits,
3. Apply the stashed commits on top of what just got pulled
4. if there are any merges to be made, do them, add them and continue the rebase. Like so:
5. git add .
6. git rebase --continue

**Push changes online**
git push

### References

- https://pinboard.in/u:rough/t:git/
- http://www.integralist.co.uk/posts/git-tips/
- http://bradfrostweb.com/blog/post/gitgithub-resources/
- http://try.github.io/
- http://24ways.org/2013/git-for-grownups/