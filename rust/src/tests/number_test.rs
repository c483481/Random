use crate::random::number::random_number;

struct TestNumberStruct {
    min: i32,
    max: i32,
}

#[test]
fn check_number() {
    let tests: [TestNumberStruct; 4] = [
        TestNumberStruct{ min: 1, max: 5 },
        TestNumberStruct{ min: 3, max: 5 },
        TestNumberStruct{ min: 2, max: 10 },
        TestNumberStruct{ min: 100, max: 200 },
    ];

    for test in tests {
        let result = random_number(test.min, test.max);
        println!("testing");
        assert!(result >= test.min || result <= test.max)
    }
}