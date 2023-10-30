import { PrismaClient } from '@prisma/client'


const prismaClientSingleton = () => {
  const instance = new PrismaClient({
    log: [
      {
        emit: 'stdout',
        level: 'query'
      },
      {
        emit: 'stdout',
        level: 'error'
      },
      {
        emit: 'stdout',
        level: 'info'
      },
      {
        emit: 'stdout',
        level: 'warn'
      }
    ]
  })

  // hack bigint can't to json
  //@ts-ignore
  global.BigInt.prototype.toJSON = function() {
    const int = Number.parseInt(this.toString())
    return int ?? this.toString()
  }
  instance.$extends({
    result: {
      success: true
    }
  })
  // middleware
  // instance.$use(async (params, next) => {
  //   return await next(params)
  // })
  return instance
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma