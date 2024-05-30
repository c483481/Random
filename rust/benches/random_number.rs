use criterion::Criterion;
use rust::random::number::random_number;

struct TestNumberStruct {
    min: i32,
    max: i32,
}

pub fn random_number_benchmark(c: &mut Criterion) {
    let tests: [TestNumberStruct; 4] = [
        TestNumberStruct{ min: 1, max: 5 },
        TestNumberStruct{ min: 3, max: 5 },
        TestNumberStruct{ min: 2, max: 10 },
        TestNumberStruct{ min: 100, max: 200 },
    ];

    for (index, test) in tests.iter().enumerate() {
        c.bench_function(
            &format!("test random number id: {}", index), 
            |b| b.iter(|| random_number(test.min, test.max))
        );
    }
}
