import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/Movie";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = req.body;

      const input : MovieInputDTO = { title, description, durationInMinutes, yearOfRelease };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });

    } catch (error) {
      res.status(400).send(error.message);
    }

  }


  getMovies = async ( req: Request,res: Response ) => {

    try {

        const movieBusiness = new MovieBusiness
        const result = await movieBusiness.getMovies()

        res.status(200).send(result)

    }catch (error: any) {
        res.status(404).send(error.message)
    }
}

}
