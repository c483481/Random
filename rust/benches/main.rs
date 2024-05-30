use criterion::{
    criterion_group,
    criterion_main
};
mod random_string;

use random_string::random_string_benchmark;

criterion_group!(benches, random_string_benchmark);
criterion_main!(benches);