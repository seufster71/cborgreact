ECHO getting submodules

cd ~/git/cborgreact/cborgreact
git submodule init
git submodule update
git submodule foreach git checkout master
git submodule foreach git pull origin master