function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;
    let resultText = '';
    let steps = '';
    let cara = '';
    let rumus = '';

    if (isNaN(temperature)) {
        resultText = 'Please enter a valid number';
    } else {
        if (scale === 'celsius') {
            // Ubah dari Celsius to Fahrenheit
            const convertedTemp = (temperature * 9/5) + 32;
            steps = `(${temperature} * 9/5) + 32 = ${temperature * 9/5 + 32}°F<br>`;
            resultText = `${convertedTemp.toFixed(1)}°F`;
            cara = `Suhu akhir "S" dalam derajat Fahrenheit (°F) sama dengan suhu awal "So" dalam derajat Celcius (°C) kali 9/5 tambah 32`
            rumus = `S = (So x 9/5) + 32`;
        } else if (scale == 'fahrenheit') {
            // Ubah dari Fahrenheit to Celsius
            const convertedTemp = (temperature - 32) * 5/9;
            steps = `(${temperature}-32) * 5/9 = ${(temperature - 32) * 5/9}°C<br>`;
            resultText = `${convertedTemp.toFixed(1)}°C`;
            cara = `Suhu akhir "S" dalam derajat Celcius (°C) sama dengan suhu awal "So" dalam derajat Fahrenheit (°F) kurang 32 lalu kali 5/9`
            rumus = `S = (So -32) x 5/9`;
        } else if (scale == 'ckelvin') {
            // Ubah dari Celcius to Kelvin
            const convertedTemp = temperature + 273;
            steps = `${temperature} + 273 = ${(temperature + 273)} K<br>`;
            resultText = `${convertedTemp.toFixed(1)} K`;
            cara = `Suhu akhir "S" dalam derajat Kelvin (K) sama dengan suhu awal "So" dalam derajat Celcius (°C) tambah 273`
            rumus = `S = So + 273`;
        } else if (scale == 'kcelcius') {
            // Ubah dari Kelvin to Celcius
            const convertedTemp = temperature - 273;
            steps = `${temperature} - 273 = ${(temperature - 273)}°C<br>`;
            resultText = `${convertedTemp.toFixed(1)}°C`;
            cara = `Suhu akhir "S" dalam derajat Celcius (°C) sama dengan suhu awal "So" dalam derajat Kelvin (K) kurang 273`
            rumus = `S = So - 273`;
        }
        else if (scale == 'fkelvin') {
            // Ubah dari Fahrenheit to Kelvin
            const convertedTemp = ((temperature - 32) * 5/9) + 273;
            steps = `((${temperature} - 32) * 5/9) + 273 = ${(((temperature - 32)*5/9) +273)} K<br>`;
            resultText = `${convertedTemp.toFixed(1)} K`;
            cara = `Suhu akhir "S" dalam derajat Kelvin (K) sama dengan suhu awal "So" dalam derajat Fahrenheit (°F) kurang 32 lalu kali 5/9, kemudian tambah 273`
            rumus = `S = ((So -32) x 5/9) + 273`;
        }
        else if (scale == 'kfahrenheit') {
            // Ubah dari Kelvin to Fahrenheit
            const convertedTemp = (9/5 * (temperature - 273)) + 32;
            steps = `9/5 * (${temperature} - 273) + 32 = ${9/5 * (temperature - 273) + 32}°F <br>`;
            resultText = `${convertedTemp.toFixed(1)}°F`;
            cara = `Suhu akhir "S" dalam derajat Fahrenheit (°F) sama dengan suhu awal "So" dalam derajat Kelvin (K) kurang 273 lalu kali 9/5, kemudian tambah 32`
            rumus = `S = ((So -273) x 9/5) + 32 `;
        }
    }

    document.getElementById('result').innerHTML = `<h2>Result</h2><p>${resultText}</p><h2>Steps</h2><p>${steps}</p><h2>Cara</h2><p>${cara}</p><p>${rumus}</p>`;
}

function resetForm() {
    document.getElementById('conversionForm').reset();
    document.getElementById('result').innerHTML = '';
}

function surprise() {
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
}