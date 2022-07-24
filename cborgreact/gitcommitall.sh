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
	ECHO "#### admin"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/admin
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/adminView
	checkAndCommit "${1}"
	
	ECHO "#### core"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/core
	checkAndCommit "${1}"
	
	ECHO "#### coreView"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/coreView
	checkAndCommit "${1}"
	
	ECHO "#### member acquaintances"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### member dashboard"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### member events"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/events
	checkAndCommit "${1}"
	
	ECHO "#### member groups"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/groups
	checkAndCommit "${1}"
	
	ECHO "#### member logout"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/logout
	checkAndCommit "${1}"
	
	ECHO "#### member notes"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/notes
	checkAndCommit "${1}"
	
	ECHO "#### member profile"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/profile
	checkAndCommit "${1}"
	
	ECHO "#### member session"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/session
	checkAndCommit "${1}"
	
	ECHO "#### member shopping"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/shopping
	checkAndCommit "${1}"
	
	ECHO "#### member submenu"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/submenu
	checkAndCommit "${1}"
	
	ECHO "#### member pm product"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_product
	checkAndCommit "${1}"
	
	ECHO "#### member pm project"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_project
	checkAndCommit "${1}"
	
	ECHO "#### member pm release"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_release
	checkAndCommit "${1}"
	
	ECHO "#### member pm backlog"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_backlog
	checkAndCommit "${1}"
	
	ECHO "#### member pm defect"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_defect
	checkAndCommit "${1}"
	
	ECHO "#### member pm enhancement"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_enhancement
	checkAndCommit "${1}"
	
	ECHO "#### member pm scrum"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_scrum
	checkAndCommit "${1}"
	
	ECHO "#### member pm sprint"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_sprint
	checkAndCommit "${1}"
	
	ECHO "#### member pm task"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_task
	checkAndCommit "${1}"
	
	ECHO "#### member pm team"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_team
	checkAndCommit "${1}"
	
	ECHO "#### member pm testcase"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_testcase
	checkAndCommit "${1}"
	
	ECHO "#### member pm testscenario"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_testscenario
	checkAndCommit "${1}"
	
	ECHO "#### member pm workflow"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_workflow
	checkAndCommit "${1}"
	
	ECHO "#### member pm deploy"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/pm_deploy
	checkAndCommit "${1}"
	
	ECHO "#### memberView acquaintances"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### memberView dashboard"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### memberView events"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/events
	checkAndCommit "${1}"
	
	ECHO "#### memberView groups"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/groups
	checkAndCommit "${1}"
	
	ECHO "#### memberView logout"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/logout
	checkAndCommit "${1}"
	
	ECHO "#### memberView notes"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/notes
	checkAndCommit "${1}"
	
	ECHO "#### memberView profile"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/profile
	checkAndCommit "${1}"
	
	ECHO "#### memberView shopping"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/shopping
	checkAndCommit "${1}"
	
	ECHO "#### memberView submenu"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/submenu
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm product"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_product
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm project"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_project
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm release"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_release
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm backlog"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_backlog
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm defect"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_defect
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm enhancement"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_enhancement
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm scrum"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_scrum
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm sprint"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_sprint
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm task"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_task
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm team"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_team
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm testcase"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_testcase
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm testscenario"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_testscenario
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm workflow"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_workflow
	checkAndCommit "${1}"
	
	ECHO "#### memberView pm deploy"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/pm_deploy
	checkAndCommit "${1}"
	
	ECHO "#### member ec product"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/member/ec_product
	checkAndCommit "${1}"
	
	ECHO "#### memberView ec product"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/memberView/ec_product
	checkAndCommit "${1}"
	
	ECHO "#### system"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/system
	checkAndCommit "${1}"
	
	ECHO "#### systemView"
	cd ~/$GIT_DIR/cborgreact/cborgreact/src/main/js/systemView
	checkAndCommit "${1}"
	
	
	ECHO "#### main"
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
