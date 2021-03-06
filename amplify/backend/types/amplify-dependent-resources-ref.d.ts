export type AmplifyDependentResourcesAttributes = {
    "function": {
        "MyApiGreeting": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "reactamplifiedGreetingLayer": {
            "Arn": "string"
        }
    },
    "api": {
        "myapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}