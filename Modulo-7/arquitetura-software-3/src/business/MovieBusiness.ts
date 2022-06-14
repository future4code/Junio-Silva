import { MovieDatabase } from "../data/MovieDatabase"
import { MovieInputDTO } from "../model/Movie"
import { idGenerate } from '../services/idGenerator'

export class MovieBusiness {
  async create(input: MovieInputDTO ):Promise<void> {

    const { title, description, durationInMinutes, yearOfRelease } = input;

    if (!title || !description|| !durationInMinutes || !yearOfRelease) {
      throw new Error("Dados inválidos (title, description, duration, release)")
    }

    const id = idGenerate()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
      yearOfRelease
    })
  }

  public getMovies = async () => {
    const userDatabase = new MovieDatabase
    const result = await userDatabase.getMovies()
    return result
}

}