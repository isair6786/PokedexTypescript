import {  Router } from "express";
import {  query } from 'express-validator';
import { handleInputErrors } from "../middleware/errorMiddleware";
import { authenticate } from "../middleware/authMiddleware";
import { findPokemonById, getAllPokemon, getEvolvingChainbyPokemonId } from "../handlers/pokemonHandle";
const router = Router()

router.get('/getPokemonById',
    authenticate,
    query('idPokemon')
        .notEmpty()
        .withMessage(`Pokemon's Id is required`),
    handleInputErrors,
    findPokemonById
)
router.get('/getAllPokemon',
    authenticate,
    handleInputErrors,
    getAllPokemon
)
router.get('/getEvolvingChainbyPokemonId',
    authenticate,
    query('idPokemon')
        .notEmpty()
        .withMessage(`Pokemon's Id is required`),
    handleInputErrors,
    getEvolvingChainbyPokemonId
)
export default router