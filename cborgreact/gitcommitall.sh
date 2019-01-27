
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
		echo "#### Complete"
	fi
}

commitAll() {
	ECHO "#### admin"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/admin
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/adminView
	checkAndCommit "${1}"
	
	ECHO "#### core"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/core
	checkAndCommit "${1}"
	
	ECHO "#### coreView"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/coreView
	checkAndCommit "${1}"
	
	ECHO "#### member acquaintances"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### member dashboard"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### member events"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/events
	checkAndCommit "${1}"
	
	ECHO "#### member groups"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/groups
	checkAndCommit "${1}"
	
	ECHO "#### member logout"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/logout
	checkAndCommit "${1}"
	
	ECHO "#### member notes"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/notes
	checkAndCommit "${1}"
	
	ECHO "#### member profile"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/profile
	checkAndCommit "${1}"
	
	ECHO "#### member session"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/session
	checkAndCommit "${1}"
	
	ECHO "#### member shopping"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/shopping
	checkAndCommit "${1}"
	
	ECHO "#### member submenu"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/member/submenu
	checkAndCommit "${1}"
	
	ECHO "#### memberView acquaintances"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### memberView dashboard"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### memberView events"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/events
	checkAndCommit "${1}"
	
	ECHO "#### memberView groups"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/groups
	checkAndCommit "${1}"
	
	ECHO "#### memberView logout"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/logout
	checkAndCommit "${1}"
	
	ECHO "#### memberView notes"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/notes
	checkAndCommit "${1}"
	
	ECHO "#### memberView profile"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/profile
	checkAndCommit "${1}"
	
	ECHO "#### memberView shopping"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/shopping
	checkAndCommit "${1}"
	
	ECHO "#### memberView submenu"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/memberView/submenu
	checkAndCommit "${1}"
	
	
	ECHO "#### system"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/system
	checkAndCommit "${1}"
	
	ECHO "#### systemView"
	cd ~/gitsts/cborgreact/cborgreact/src/main/js/systemView
	checkAndCommit "${1}"
	
	
	ECHO "#### main"
	cd ~/gitsts/cborgreact/cborgreact
	checkAndCommit "${1}"
	
	ECHO "#### Done committing"
}

all() {
	commitAll "{$1}"
}


	
if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else 
	str="'$*'"
	echo Your comment is $str
	all $str
fi	
