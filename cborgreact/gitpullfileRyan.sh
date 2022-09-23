GIT_DIR="git"
BRANCH="feature/Ryan_1_on_develop"

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


ECHO member dashboard
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/dashboard
git pull origin $BRANCH

ECHO memberView dashboard
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/dashboard
git pull origin $BRANCH


ECHO member logout
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/logout
git pull origin $BRANCH

ECHO memberView logout
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/logout
git pull origin $BRANCH


ECHO member profile
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/profile
git pull origin $BRANCH

ECHO memberView profile
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/profile
git pull origin $BRANCH


ECHO member session
cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/session
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