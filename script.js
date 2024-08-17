
    document.addEventListener('DOMContentLoaded', function() {
        createGrid();

        function createGrid() {
            const gridContainer = document.getElementById('gridContainer');
            const numColumns = 5;
            const numRows = 5;
            
            // Clear previous boxes
            gridContainer.innerHTML = '';

            for (let row = 0; row < numRows; row++) {
                for (let col = 0; col < numColumns; col++) {
                    const box = document.createElement('div');
                    box.classList.add('box');

                    // Create content div
                    const contentDiv = document.createElement('div');
                    contentDiv.classList.add('box-content');
                    contentDiv.innerHTML = generateContent();

                    // Create vertical lines
                    const line1 = createLine('vertical', 'vertical-top-left');
                    const line2 = createLine('vertical', 'vertical-top-right');
                    const line3 = createLine('vertical', 'vertical-bottom-left');
                    const line4 = createLine('vertical', 'vertical-bottom-right');
                    
                    // Create horizontal lines
                    const line5 = createLine('horizontal', 'horizontal-top-left');
                    const line6 = createLine('horizontal', 'horizontal-top-right');
                    const line7 = createLine('horizontal', 'horizontal-bottom-left');
                    const line8 = createLine('horizontal', 'horizontal-bottom-right');

                    // Append lines and content div to box
                    box.appendChild(contentDiv);
                    box.appendChild(line1);
                    box.appendChild(line2);
                    box.appendChild(line3);
                    box.appendChild(line4);
                    box.appendChild(line5);
                    box.appendChild(line6);
                    box.appendChild(line7);
                    box.appendChild(line8);

                    // Append box to grid container
                    gridContainer.appendChild(box);
                }
            }
        }

        function createLine(orientation, position) {
            const line = document.createElement('div');
            line.classList.add('line', orientation, position);
            return line;
        }

        function generateContent() {
            const code = document.getElementById('code').value;
            const commodity = document.getElementById('commodity').value;
            const month = document.getElementById('month').value;
            const year = document.getElementById('year').value;
            const price = document.getElementById('price').value;
            const imageUrl = document.getElementById('image').files[0] ? URL.createObjectURL(document.getElementById('image').files[0]) : 'https://shopping.euronics.co.in/wp-content/uploads/2018/03/cropped-cropped-Euronics-logo.png';
            const batchNumber = `${year}${month}${code.substring(1)}`;

            return `
                <div style="width:80px;"><img src="https://euronics.co.in/resource/Euronics-Logo.svg"></div>
                <div class="text right-aligned">
                    <div class="text" style="margin-top:-4px;">Code: <span style="font-weight: bold;">${code}</span></div>                    
                    <span class="right-top">Commodity:<b> ${commodity}</b></span>
                </div>                
                <div class="text">Quantity:<b> 1 Pc</b></div>
                <div class="text">Month & Year of Mfg:<b> ${getMonthName(month)} ${getYear(year)}</b></div>
                <div class="text">Batch No: <span style="font-weight: bold;">${batchNumber}</span></div>
                <div class="text">MRP: Rs.<b> ${price}.00 </b>(Inclusive of all taxes)</div>
                <div class="text3">Marketed by: Euronics Industries Pvt. Ltd.</div>
                <div class="text2">567 Udyog Vihar, Ph - 5, Gurugram - 122016, Haryana, India</div>
                <div class="text">Customer Care: Toll Free Helpline 1800 102 7731</div>
                <div class="text">Email: in@euronics.co.in</div>
                <span class="right-bottom">Website: www.euronics.co.in</span>
                <div class="text"><img src="${imageUrl}" alt="Product Image" class="center-image"></div>
            `;
        }

        function getMonthName(monthNumber) {
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            return monthNames[parseInt(monthNumber) - 1];
        }

        function getYear(reversedYear) {
            return reversedYear.split('').reverse().join('');
        }

        window.updateBoxes = function() {
            createGrid();
            document.getElementById("product-form").style.display = "none";
        };
    });
