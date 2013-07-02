# Commit local changes
git add .
git commit -m "message"

# Pull remote changes (with rebase)
git pull --rebase

# this temporarily stashes your local commits,
# applies the online commits,
# and then applies your local commit(s) on top.

# if there are any merges to be made, do them, add them and continue the rebase. Like so:
git add .
git rebase --continue

# push changes online
git push

KOPFWELT, Berlin - 17. april 2013
