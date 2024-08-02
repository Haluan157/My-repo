import { sql } from '@vercel/postgres';

/** @type {import('./$types').PageLoad} */
export async function load() {
  try {
    const { rows } = await sql`SELECT nama, skor FROM scores ORDER BY skor DESC LIMIT 10`;
    return {
      topScores: rows
    };
  } catch (error) {
    console.error('Error fetching scores:', error);
    return {
      topScores: []
    };
  }
}