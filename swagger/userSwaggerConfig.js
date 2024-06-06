/**
 * @swagger
 * components:
 *   schemas:
 *     newUser:
 *       type: object
 *       required: true
 *         - email
 *         - firstName
 *         - lastName
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: user email id
 *           example: ajay@gmail.com
 *         firstName:
 *           type: string
 *           description: user first name
 *           example: Ajay
 *         lastName:
 *           type: string
 *           description: user last name
 *           example: B
 *         role:
 *           type: string
 *           description: user role
 *           example: Admin 
 *     authenticateUser:
 *       type: object
 *       required: true
 *         - email
 *         - password 
 *       properties:
 *         email:
 *           type: string
 *           description: user email id
 *           example: ashokgalaxy07@gmail.com
 *         password:
 *           type: string
 *           description: user password
 *           example: Ashok@123 
 *     userList:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User email id
 *           example: ashokgalaxy07@gmail.com
 *         firstName:
 *           type: string
 *           description: User first name
 *           example: Ashok Kumar
 *         lastName:
 *           type: string
 *           description: User last name
 *           example: D
 *         role:
 *           type: string
 *           description: User Role
 *           example: Admin
 *         createdDate:
 *           type: string
 *           description: User Created Date
 *           example: 2024-06-03T09:14:41.606Z
 *         id:
 *           type: string
 *           description: User unique id
 *           example: 665d8981c6d16e5478abbec8
 *     authenticateResponse:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: User email id
 *               example: ashokgalaxy07@gmail.com
 *             firstName:
 *               type: string
 *               description: User first name
 *               example: Ashok Kumar
 *             lastName:
 *               type: string
 *               description: User last name
 *               example: D
 *             role:
 *               type: string
 *               description: User Role
 *               example: Admin
 *             createdDate:
 *               type: string
 *               description: User Created Date
 *               example: 2024-06-03T09:14:41.606Z
 *             id:
 *               type: string
 *               description: User unique id
 *               example: 665d8981c6d16e5478abbec8
 *             token:
 *               type: string
 *               description: user login token
 *               example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjVkODk4MWM2ZDE2ZTU0NzhhYmJlYzgiLCJyb2xlIjoiVXNlciIsImlhdCI6MTcxNzQwNzMxMywiZXhwIjoxNzE4MDEyMTEzfQ.VpuBc2U1yzzxpUNnrredsgKJMhPVwEizVA6KyE-LLPA
 *         message:
 *           type: string
 *           description: user login message
 *           example: User logged in successfully 
 */

/**
 * @swagger
 * /authenticate:
 *   post:
 *     summary: create a list of todos.
 *     description: Retrieve a list of users from JSONPlaceholder.
 *     requestBody:
 *       description: request object for add data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/authenticateUser'
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/authenticateResponse'
 */
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Add new user.
 *     description: add new user to the list.
 *     requestBody:
 *       description: request object for add data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newUser'
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: success message
 *                    example: User Registered successfully with email
 */

/**
 * @swagger
 * /${id}:
 *   get:
 *     summary: list the all user.
 *     description: list the user details.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/userList'
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: list the all user.
 *     description: list the all user in the user list.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/userList'
 */

/**
 * @swagger
 * /${id}:
 *   put:
 *     summary: list the user.
 *     description: list the all user in the user list.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: request object for add data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newUser'
 *     responses:
 *       200:
 *         description: get user details.
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/userList'
 */

/**
 * @swagger
 * /${id}:
 *   put:
 *     summary: delete user.
 *     description: list the all user in the user list.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: get user details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: success message
 *                   example: User with id: 665d8981c6d16e5478abbec8 updated successfully.
 */