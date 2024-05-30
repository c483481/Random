use criterion::Criterion;
use rust::random::string::random_string;

struct TestStringStruct {
    length: usize,
}

pub fn random_string_benchmark(c: &mut Criterion) {
    let tests: [TestStringStruct; 4] = [
        TestStringStruct{ length: 5 },
        TestStringStruct{ length: 9 },
        TestStringStruct{ length: 15 },
        TestStringStruct{ length: 30 },
    ];

    for (index, test) in tests.iter().enumerate() {
        c.bench_function(
            &format!("test random string id: {}", index), 
            |b| b.iter(|| random_string(test.length))
        );
    }
}
