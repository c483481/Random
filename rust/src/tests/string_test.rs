use crate::random::string::random_string;

struct TestStringStruct {
    length: usize,
}

#[test]
fn check_string() {
    let tests: [TestStringStruct; 4] = [
        TestStringStruct{ length: 5 },
        TestStringStruct{ length: 9 },
        TestStringStruct{ length: 15 },
        TestStringStruct{ length: 30 },
    ];

    for test in tests {
        let result = random_string(test.length);
        assert!(result.len() == test.length)
    }
}