/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs-extra")

const start = async function () {
    const src = "../dist"
    const copy = "./dist"

    await fs.remove(copy)
    await fs.copy(src, copy)
}
start()
