import axios from "axios";
import { createUser } from "services/user";

jest.mock("axios");

const formUserValues = {
  firstName: "Julio",
  lastName: "Guedes",
  phone: "3199282822",
  email: "julio@gmail.com",
  gender: "male",
};

describe("http request", () => {
  test("should login user", async () => {
    const data = formUserValues;

    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    await expect(createUser(data)).resolves.toEqual(data);

    expect(axios.post).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_URL}/login`,
      data
    );
  });
});
