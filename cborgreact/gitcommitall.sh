
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
	ECHO "#### admin"
	cd ~/git/cborgreact/cborgreact/src/main/js/admin
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/git/cborgreact/cborgreact/src/main/js/adminView
	checkAndCommit "${1}"
	
	ECHO "#### core"
	cd ~/git/cborgreact/cborgreact/src/main/js/core
	checkAndCommit "${1}"
	
	ECHO "#### coreView"
	cd ~/git/cborgreact/cborgreact/src/main/js/coreView
	checkAndCommit "${1}"
	
	ECHO "#### member acquaintances"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### member dashboard"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### member events"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/events
	checkAndCommit "${1}"
	
	ECHO "#### member groups"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/groups
	checkAndCommit "${1}"
	
	ECHO "#### member logout"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/logout
	checkAndCommit "${1}"
	
	ECHO "#### member notes"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/notes
	checkAndCommit "${1}"
	
	ECHO "#### member profile"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/profile
	checkAndCommit "${1}"
	
	ECHO "#### member session"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/session
	checkAndCommit "${1}"
	
	ECHO "#### member shopping"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/shopping
	checkAndCommit "${1}"
	
	ECHO "#### member submenu"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/submenu
	checkAndCommit "${1}"
	
	ECHO "#### member pm product"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/pm_product
	checkAndCommit "${1}"
	
	ECHO "#### member pm project"
	cd ~/git/cborgreact/cborgreact/src/main/js/member/pm_project
	checkAndCommit "${1}"
	
	ECHO "#### memberView acquaintances"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### memberView dashboard"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### memberView events"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/events
	checkAndCommit "${1}"
	
	ECHO "#### memberView groups"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/groups
	checkAndCommit "${1}"
	
	ECHO "#### memberView logout"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/logout
	checkAndCommit "${1}"
	
	ECHO "#### memberView notes"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/notes
	checkAndCommit "${1}"
	
	ECHO "#### memberView profile"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/profile
	checkAndCommit "${1}"
	
	ECHO "#### memberView shopping"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/shopping
	checkAndCommit "${1}"
	
	ECHO "#### memberView submenu"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/submenu
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm product"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/pm_product
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm project"
	cd ~/git/cborgreact/cborgreact/src/main/js/memberView/pm_project
	checkAndCommit "${1}"
	
	ECHO "#### system"
	cd ~/git/cborgreact/cborgreact/src/main/js/system
	checkAndCommit "${1}"
	
	ECHO "#### systemView"
	cd ~/git/cborgreact/cborgreact/src/main/js/systemView
	checkAndCommit "${1}"
	
	
	ECHO "#### main"
	cd ~/git/cborgreact/cborgreact
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
