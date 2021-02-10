import { http } from "services/api";
import { createUser } from "services/user";

jest.mock("services/api");

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

    const httpPostSpy: jest.SpyInstance = http.post as any;

    httpPostSpy.mockImplementationOnce(() => Promise.resolve(data));

    await expect(createUser(data)).resolves.toEqual(data);

    expect(httpPostSpy).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_URL}/login`,
      data
    );
  });
});
