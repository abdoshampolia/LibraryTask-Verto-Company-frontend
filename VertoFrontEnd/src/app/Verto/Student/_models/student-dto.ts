import { BookDto } from "../../Book/_models/book-dto";

export interface StudentDto {
  name: string | null;
  address: string | null;
  nationalId: number | null;
  email: string | null;
  mobileNumber: number | null;
  dateOfBirth: string | null;
  isActive: boolean | null;
  books: BookDto[] | null;
}
