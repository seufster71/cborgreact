# cborgreact

Copyright (C) 2016-2022 The ToastHub Project

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


create directory git and clone all project into this directory script depend on it.

Initial Setup clone the following java repos 
https://github.com/seufster71/toasthub-core.git
https://github.com/seufster71/toasthub-admin.git
https://github.com/seufster71/toasthub-ecommerce.git
https://github.com/seufster71/toasthub-member.git
https://github.com/seufster71/toasthub-security.git
https://github.com/seufster71/toasthub-system.git
https://github.com/seufster71/toasthub-social.git 
https://github.com/seufster71/toasthub-pm.git 

clone db scripts 
https://github.com/seufster71/toasthub-db.git

run command to pull and attach submodules (make sure directories are populated) 
gitsubmodules.sh

setup database need to run both files go to toasthub-db -> monolith -> cborgreact
./maindbload.sh 
./custdbload.sh

run npm install

start server

run npm start

This just to remember how to initially add a submodule. You do not need to execute these commands
place at src/main/js 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-core.git core 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-core.git coreView 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-admin.git admin 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-admin.git adminView 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-system.git system 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-system.git systemView

cd to src/main/js/member 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-session.git session 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-profile.git profile 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-logout.git logout

cd to src/main/js/memberView 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-member-profile.git profile 
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-member-logout.git logout

cd to src/main/js/member
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-pm.git pm
cd to src/main/js/memberView
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-member-pm.git pm
