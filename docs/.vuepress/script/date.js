export default function date() {
    const today = new Date();

    const year = today.getFullYear(); // 2025
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 07（月份从0开始，所以要+1）
    const day = String(today.getDate()).padStart(2, '0'); // 14

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}