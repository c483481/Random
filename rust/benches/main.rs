use criterion::{
    criterion_group,
    criterion_main
};
mod random_string;
mod random_number;

use random_string::random_string_benchmark;
use random_number::random_number_benchmark;

criterion_group!(benches, random_string_benchmark, random_number_benchmark);
criterion_main!(benches);