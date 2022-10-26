GIT_DIR="git"
BRANCH="feature/Ed_1_on_develop"

ECHO admin
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/admin
git pull origin $BRANCH

ECHO adminView
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/adminView
git pull origin $BRANCH


ECHO core
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/core
git pull origin $BRANCH

ECHO coreView
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/coreView
git pull origin $BRANCH


ECHO member acquaintances
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/social
git pull origin $BRANCH

ECHO memberView acquaintances
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/social
git pull origin $BRANCH


ECHO member pm
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm
git pull origin $BRANCH

ECHO memberView pm
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm
git pull origin $BRANCH


ECHO system
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/system
git pull origin $BRANCH

ECHO systemView
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/systemView
git pull origin $BRANCH


ECHO main
cd ~/$GIT_DIR/cborgreact/cborgreact
git pull origin $BRANCH