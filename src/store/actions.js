import * as types from './types';



/**
 * Add error for a file
 * @param filename String name of the file that throw an error
 */
export const error = ({ commit }, filename) => {
  commit(types.ADD_ERROR, filename)
}