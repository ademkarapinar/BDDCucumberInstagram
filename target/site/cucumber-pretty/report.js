$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@instagram"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "adem@gmail.com",
        "test123"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "jim@gmail.com",
        "test456"
      ],
      "line": 20,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "liz@gmail.com",
        "123Test"
      ],
      "line": 21,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6706873762,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.IamOnHomePage()"
});
formatter.result({
  "duration": 221199990,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@instagram"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter adem@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adem@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 139621418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 101911274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickOnButton(String)"
});
formatter.result({
  "duration": 297413791,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1056524644,
  "status": "passed"
});
formatter.after({
  "duration": 3484928863,
  "status": "passed"
});
formatter.before({
  "duration": 5123484017,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.IamOnHomePage()"
});
formatter.result({
  "duration": 2713000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@instagram"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter jim@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter test456 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jim@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 27
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 70275086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test456",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 81863350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickOnButton(String)"
});
formatter.result({
  "duration": 296386448,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1031788601,
  "status": "passed"
});
formatter.after({
  "duration": 3469366678,
  "status": "passed"
});
formatter.before({
  "duration": 4218125258,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.IamOnHomePage()"
});
formatter.result({
  "duration": 2867714,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@instagram"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter liz@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter 123Test into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "liz@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 27
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 1082782884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123Test",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 70645022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickOnButton(String)"
});
formatter.result({
  "duration": 297934634,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1032488127,
  "status": "passed"
});
formatter.after({
  "duration": 3464721106,
  "status": "passed"
});
});