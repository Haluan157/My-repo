import { writable } from 'svelte/store';
import { sql } from '@vercel/postgres';

/** @type {import('./$types').PageLoad} */

export async function inn(nama, angka) {
  try {
    await sql`INSERT INTO scores (nama, skor) VALUES (${nama}, ${angka});`
  } catch (error) {
    console.error(error)
  }
}

export async function up(nama, angka) {
  try {
    await sql`UPDATE scores SET skor = ${angka} WHERE nama = ${nama};`
  } catch (error) {
    console.error(error)
  }
}

export const titleStore = writable('');
