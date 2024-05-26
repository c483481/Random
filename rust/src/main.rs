#[cfg(test)]
mod tests;

mod random;


use random::number::random_number;

fn main() {
    println!("random number between 1 - 5: {}", random_number(1, 5));
}
