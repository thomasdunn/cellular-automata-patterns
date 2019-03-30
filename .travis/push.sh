git config --local user.name "Tom Dunn"
git config --local user.email "thomas.dunn@gmail.com"
git checkout master
git add --force ../patterns ../index.json
# exit this script if there are no changes
git diff-index --quiet HEAD -- && exit 0
echo "There are changes to be committed"
git commit -m "Pattern update from Travis CI - build #$TRAVIS_BUILD_NUMBER - $(date -Iseconds)"
npm version patch -m "Pattern update version bump to %s"
git remote set-url origin https://${GITHUB_TOKEN}@github.com/thomasdunn/cellular-automata-patterns.git > /dev/null 2>&1
git push --quiet --follow-tags --set-upstream origin master > /dev/null 2>&1
