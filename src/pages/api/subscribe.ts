import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Adresse email invalide' }), 
        { status: 400 }
      );
    }

    // TODO: Intégrer avec votre service d'email préféré
    // Exemple avec un service fictif :
    /*
    await emailService.subscribe({
      email,
      listId: 'votre-liste-id',
    });
    */

    return new Response(
      JSON.stringify({ message: 'Inscription réussie' }), 
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur serveur' }), 
      { status: 500 }
    );
  }
}
