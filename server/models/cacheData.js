const prisma = require("../utils/prisma");

const CacheData = {
  new: async (inputs = {}) => {
    try {
      const cache = await prisma.cache_data.create({
        data: inputs,
      });
      return { cache, message: null };
    } catch (error) {
      console.error(error.message);
      return { cache: null, message: error.message };
    }
  },

  get: async (clause = {}, limit = null, orderBy = null) => {
    try {
      const cache = await prisma.cache_data.findFirst({
        where: clause,
        ...(limit !== null ? { take: limit } : {}),
        ...(orderBy !== null ? { orderBy } : {}),
      });
      return cache || null;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },

  delete: async (clause = {}) => {
    try {
      await prisma.cache_data.deleteMany({
        where: clause,
      });
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  },

  where: async (clause = {}, limit = null, orderBy = null) => {
    try {
      const caches = await prisma.cache_data.findMany({
        where: clause,
        ...(limit !== null ? { take: limit } : {}),
        ...(orderBy !== null ? { orderBy } : {}),
      });
      return caches;
    } catch (error) {
      console.error(error.message);
      return [];
    }
  },

  count: async (clause = {}) => {
    try {
      const count = await prisma.cache_data.count({
        where: clause,
      });
      return count;
    } catch (error) {
      console.error(error.message);
      return 0;
    }
  },
};

module.exports = { CacheData };
