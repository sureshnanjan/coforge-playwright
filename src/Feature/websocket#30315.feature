Feature:Access testInfo in custom matchers
@positive @#30101
Scenario:User should be able to attach a file to the test report for failure
Given The runned test case is failed
When I can able to attach test report
Then I can able to access TestInfo
And I can use "testInfo.attach()" for attaching files
And I can use "testInf.outputPath()" for managing temporary files

@negtive
Scenario:User should be not able to attach a file to the test report for failure
Given The runned test case is failed
When I can not able to attach test report
Then I can not able to access TestInfo
And I can use "testInfo.attach()" for attaching files
And I can use "testInf.outputPath()" for managing temporary files





