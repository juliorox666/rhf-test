// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

export const handlers = [
  rest.post<User>(
    "https://auth-provider.test.com/api/login",
    async (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(req.body)
      );
      // const { firstName } = req.body;
      // return res(
      //   // Respond with a 200 status code
      //   ctx.status(403),
      //   ctx.json({
      //     errorMessage: `User '${firstName}' not found`,
      //   })
      // );
    }
  ),
];
