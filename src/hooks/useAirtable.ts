export const useAirtable = () => {
  /**
   * Adds the email to airtable
   * @param email
   */
  const addEmail = async (email: string) => {
    // Get some credentials
    const endpointUrl = `${import.meta.env.DEV ?
        "https://api.airtable.com/v0/appXB3kegSid3PU6U" :
        import.meta.env.VITE_AIRTABLE_API_ENDPOINT}/Subscriptions`;
    const bearerApiKey = `Bearer ${import.meta.env.DEV ?
        "patVSZ5dtIQReIfdp.5cedd3fcac7349a79c4ca7acf3d47688d26da95f74da3286172f6349f29477de" :
        import.meta.env.VITE_AIRTABLE_API_KEY
      }`

    console.log(endpointUrl);
    console.log(bearerApiKey);

    // POST the email to Airtable
    fetch(
      endpointUrl,
      {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Authorization": bearerApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"records": [{"fields": { email }}]}),
      }
    );
  }

  return { addEmail }
}