var accountIDInfo = [{
        visitor: {
            id: 'VIS-TEST-USER-ID10009' // Required if user is logged in
                ,
            email: "test.user1@yahoo.com" // Recommended if using Pendo Feedback, or NPS Email
                ,
            full_name: "Test User ID10009 " // Recommended if using Pendo Feedback
                ,
            role: "User Role ID10009" // Optional
                ,
            additionalVField: "custom added to test VIS 1",
            tag: "tag for index 10009"
        },
        account: {
            id: 'ACCT-UNIQUE-ID10009' // Required if using Pendo Feedback
                ,
            name: "ACT-U-ID10009-NAME" // Optional
                ,
            is_paying: "1M USD" // Recommended if using Pendo Feedback
                ,
            monthly_value: "10M USD" // Recommended if using Pendo Feedback
                ,
            planLevel: "Plan Level Tier 1" // Optional
                ,
            planPrice: "1K USD per Month" // Optional
                ,
            creationDate: `${new Date(2020, 0, 10)}` // Optional
                ,
            additionalAField: "custom added to test ACCT 1",
            tag: "tag for index 10009"
        }

    },
    {
        visitor: {
            id: 'VIS-TEST-USER-ID20009' // Required if user is logged in
                ,
            email: "test.user2@yahoo.com" // Recommended if using Pendo Feedback, or NPS Email
                ,
            full_name: "Test User ID20009 " // Recommended if using Pendo Feedback
                ,
            role: "User Role ID20009" // Optional
                ,
            additionalVField: "custom added to test VIS 2",
            tag: "tag for index 20009"
        },
        account: {
            id: 'ACCT-UNIQUE-ID20009' // Required if using Pendo Feedback
                ,
            name: "ACT-U-ID20009-NAME" // Optional
                ,
            is_paying: "2M USD" // Recommended if using Pendo Feedback
                ,
            monthly_value: "20M USD" // Recommended if using Pendo Feedback
                ,
            planLevel: "Plan Level Tier 2" // Optional
                ,
            planPrice: "2K USD per Month" // Optional
                ,
            creationDate: `${new Date(2020, 0, 20)}` // Optional
                ,
            additionalAField: "custom added to test ACCT 2",
            tag: "tag for index 20009"
        }
    },
    {
        visitor: {
            id: 'VIS-TEST-USER-ID30009' // Required if user is logged in
                ,
            email: "test.user3@yahoo.com" // Recommended if using Pendo Feedback, or NPS Email
                ,
            full_name: "Test User ID30009 " // Recommended if using Pendo Feedback
                ,
            role: "User Role ID30009" // Optional
                ,
            additionalVField: "custom added to test VIS 3",
            tag: "tag for index 30009"
        },
        account: {
            id: 'ACCT-UNIQUE-ID30009' // Required if using Pendo Feedback
                ,
            name: "ACT-U-ID30009-NAME" // Optional
                ,
            is_paying: "3M USD" // Recommended if using Pendo Feedback
                ,
            monthly_value: "30M USD" // Recommended if using Pendo Feedback
                ,
            planLevel: "Plan Level Tier 3" // Optional
                ,
            planPrice: "3K USD per Month" // Optional
                ,
            creationDate: `${new Date(2020, 0, 30)}` // Optional
                ,
            additionalAField: "custom added to test ACCT 3",
            tag: "tag for index 30009"
        }
    }
    ,{
        visitor: {
            id: 'VIS-TEST-USER-ID40009' // Required if user is logged in
        },
        account: {
            id: 'ACCT-UNIQUE-ID40009'
        }
    }
]
// export const nameID = accountIDInfo;