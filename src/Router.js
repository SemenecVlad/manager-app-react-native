import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth">
                <Scene 
                    key="login"
                    component={LoginForm} 
                    title="Please Login" />
            </Scene>

            <Scene key="main">
                <Scene
                    initial
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                     />
                <Scene 
                    key="employeeCreate"
                    title="Create Employee"
                    component={EmployeeCreate}
                />
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                />
            </Scene>
        </Router>
    )
};

export default RouterComponent;