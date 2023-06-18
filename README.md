UI Automation 
 Buid And Run
 1. Membuat Project Baru:
  A. Buka Katalon Studio dan buat proyek baru.
  B. Pilih tempat penyimpanan proyek dan tentukan nama proyek (Saya memberi nama project dengan nama "UI Automation").
 2. Membuat Test Case:
  A. Klik kanan pada folder "Test Cases" di panel proyek dan pilih "New Test Case".
  B. Beri nama pada test case baru yang akan dibuat. DImana saya membuat 2 testcase dengan nama
   - TC_Find a Service NSW location, Dimana testcase ini bertujuan untuk menguji fitur search berdasarkan Location dan kode suburb
   - TC_SearchFitur, Test ini bertujuan untuk menguji fitur search
  c. Selanjutnya membuat step dan element pada testcase yang dibuat, dimana saya menggunakan Spy Web. Dimana saya memilih objek seperti objek Input dan Button dengan menggunakan Spy Web.
  D. setelah objek di pilih, langkah selanjutnya saya menyimpan element tersebut pada bagian objek repository
  E. Selanjutnya saya membuat aksi atau step pada testcase, yaitu aksi seperti "Open Browser","navigate to url", "Click", "Set text" dan "close browser" pada setiap testcase
  F. Selanjunya Simpan testcase
3. Menjalankan Test Case
  A. Klik Testcase yang ingin dijalankan
  B. Klik tombol "Run" di toolbar atas untuk menjalankan test case.
5. Membuat test Data
  A. Pertama klik kanan pada menu "Data File"
  B. Pilih new dan pilih Test Data
  C. Beri nama test data dengan nama "Data_FindLocation" dan pilih Data Type "Excel"
  D. Klik button Browse lalu masukkan file yang telah dibuat.
  F. Klik Checkbox "Use Relative Path"
  G. Simpan Data test
  H. Kemudian pada testcase klik menu variabel dan add variabel dengan nama "Inputan"
  I. Setelah itu klik menu "Manual pada testcase", Lalu edit pada Value Type menjadi "Variable" dan Value input menjadi "Inputan" di Item "Set Text"
  J. Selanjutnya Klik kanan pada menu Test Suites
  K. Klik new Test Suites dan berikan dengan nama "Data_FindLocation", Dimana nama ini dapat berbeda dengan nama Data Test
  L. Masukkan testcase "TC_Find a Service NSW location"
  M. Setelah itu klik button "Show data Binding dan pada kolom test data klik Dropdown Add dan pilih test data yang telah ditambahkan yaitu "Data_FindLocation"
  N. Dan pada kolom variabel Binding set Name menjadi Inputan, Type menjadi Data Column, Test data diambil dari data "Data_FindLocation" dan value menjadi "Set Text"
  O. Kemudian Klik tombol "Run" di toolbar atas untuk menjalankan test case.

API Automation 
1. Register to get the API token key - https://www.weatherbit.io/account/create 
2. Maka saya mendapatkan key "a533d5c513a7485c8a3dfd1d27a1f4fb"
3. Selanjutnya akses halaman https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/
4. Setelah itu saya mencari api dengan base GET /current?lat={lat}&lon={lon} 
5. Setelah menemukan maka saya memasukkan inputan pada {lat} as 40.730610 and {lon} as -73.935242 dan Key Api token saya
6. Maka saya mendapatkan hasil sebagai berikut
![image](https://github.com/11419008IrvandiHutapea/Exercise_QA/assets/71772434/6fc394fd-b46c-4c6c-8934-c1d621f3206b)
8. Kemudian saya mencari GET /forecast/3hourly?postal_code={postal_code} 
9. Dan Saya memberikan inputan 28546 pada portal_code dan Api token key saya
10. Maka saya mendapatkan hasil sebagai berikut
![image](https://github.com/11419008IrvandiHutapea/Exercise_QA/assets/71772434/8d4383fd-239c-45bd-ad5b-e94f828bf3b0)
11. Setelah itu Request URL saya copy dan saya membuat Workspaces baru pada postman
12. Kemudian saya membuat Collection baru dan setelah itu saya membuat request GET
13. Selanjutnya saya jalankan GET dengan Request URL yang telah saya dapatkan
14. Selanjutnya saya mengintegrasikan kode Pengujian API ke CI (mis. circleCI) sedemikian rupa sehingga setiap komit baru ke kode dalam pemicu repositori Github membangun dan menjalankan pengujian API.
