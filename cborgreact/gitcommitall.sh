GIT_DIR="git"

checkAndCommit() {
	OUTPUT=$(git status --porcelain)
	if [ -z "$OUTPUT" ]; then
		echo "#### No changes found"
	else
		echo "#### Changes found"
		echo $OUTPUT
		echo "#### Add any new files"
		git add .
		echo "#### Committing files"
		git commit -m "${1}"
		echo "#### Pushing to repo"
		git push
		git log -1
		echo "#### Complete"
	fi
}

commitAll() {
	ECHO "######## admin"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/admin
	checkAndCommit "${1}"

	ECHO "######## adminView"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/adminView
	checkAndCommit "${1}"
	
	
	ECHO "######## core"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/core
	checkAndCommit "${1}"
	
	ECHO "######## coreView"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/coreView
	checkAndCommit "${1}"
	
	
	ECHO "######## member social"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/social
	checkAndCommit "${1}"
	
	ECHO "######## memberView social"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/social
	checkAndCommit "${1}"
	
	ECHO "######## member pm"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm
	checkAndCommit "${1}"
	
	ECHO "######## memberView pm"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm
	checkAndCommit "${1}"
	
	
	
	ECHO "######## system"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/system
	checkAndCommit "${1}"
	
	ECHO "######## systemView"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/systemView
	checkAndCommit "${1}"
	
	
	ECHO "######## main"
	cd ~/$GIT_DIR/cborgreact/cborgreact
	checkAndCommit "${1}"
	
	ECHO "#### Done committing"
}

all() {
	commitAll "$*"
}


	
if [ $# -eq 0 ]; then
	echo "You must supply a comment"
else 
	str="$*"
	echo Your comment is $str
	all $str
fi	
