use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("Invalid UST amount, expected 1 UST")]
    InvalidAmount {},

    #[error("Invalid CW20 hook")]
    InvalidCW20Hook {},
}
