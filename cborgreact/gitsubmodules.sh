ECHO getting submodules

GIT_DIR="git"
BRANCH="feature/Ed_1_on_develop"

cd ~/$GIT_DIR/cborgreact/cborgreact
git submodule init
git submodule update
git submodule foreach git checkout $BRANCH
git submodule foreach git pull origin $BRANCH