// src/api.ts

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

// Example API call: Fetch data from a REST endpoint using fetch
export const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};
