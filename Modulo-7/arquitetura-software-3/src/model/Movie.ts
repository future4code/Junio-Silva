export type Movie = {

   id: string,
   title: string,
   description: string,
   durationInMinutes: string,
   yearOfRelease: string
}

export interface MovieInputDTO {

  title: string,
  description: string,
  durationInMinutes: string,
  yearOfRelease: string

}
