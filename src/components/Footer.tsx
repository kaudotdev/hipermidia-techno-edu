export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-[#A1A0B5] text-sm text-center md:text-left">
                    Copyright © 2025 Techno & Edu | All Rights Reserved
                </div>
                <div className="flex gap-4 justify-center">
                    <a href="#" aria-label="Facebook" className="bg-[#F4F4FB] p-2 rounded-full hover:bg-[#E3E2EC] transition">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                            <path d="M14.5 7.333h-2.333V6.167c0-.338.274-.611.611-.611h1.389V3.667h-2c-1.104 0-2 .896-2 2v1.666H7.5v2h2v6h2.667v-6h2l-.667-2z" fill="#6D6594"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="bg-[#F4F4FB] p-2 rounded-full hover:bg-[#E3E2EC] transition">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                            <path d="M18.5 7.833c-.5.222-1 .389-1.5.444.555-.333.944-.889 1.139-1.5-.5.277-1.056.5-1.667.611A2.13 2.13 0 0016.5 6c-1.167 0-2.111.944-2.111 2.112 0 .167.017.333.056.5C10.67 8.5 8.333 7.444 6.778 5.722A2.08 2.08 0 006.5 7c0 .722.361 1.361.944 1.722-.444 0-.889-.139-1.223-.333 0 1.005.722 1.806 1.667 2-.167.05-.333.083-.528.083-.122 0-.243-.012-.361-.033.244.759.95 1.312 1.789 1.328A4.288 4.288 0 015.5 14.028c-.277 0-.556-.017-.833-.05A6.073 6.073 0 008.5 15c7.223 0 11.17-5.995 11.17-11.194 0-.172-.004-.343-.012-.513.767-.556 1.389-1.25 1.834-2.043z" fill="#6D6594"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="bg-[#F4F4FB] p-2 rounded-full hover:bg-[#E3E2EC] transition">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                            <rect x="4.5" y="4.5" width="13" height="13" rx="4" stroke="#6D6594" strokeWidth="1.5"/>
                            <circle cx="11" cy="11" r="3" stroke="#6D6594" strokeWidth="1.5"/>
                            <circle cx="15.25" cy="6.75" r="0.5" fill="#6D6594"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="bg-[#F4F4FB] p-2 rounded-full hover:bg-[#E3E2EC] transition">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                            <rect x="4.5" y="7.5" width="3" height="8" fill="#6D6594"/>
                            <rect x="9.5" y="10.5" width="3" height="5" fill="#6D6594"/>
                            <rect x="14.5" y="9.5" width="3" height="6" fill="#6D6594"/>
                            <circle cx="6" cy="6" r="1.5" fill="#6D6594"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="YouTube" className="bg-[#F4F4FB] p-2 rounded-full hover:bg-[#E3E2EC] transition">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                            <rect x="6.5" y="8.5" width="9" height="5" rx="2" stroke="#6D6594" strokeWidth="1.5"/>
                            <polygon points="10,10 13,11.5 10,13" fill="#6D6594"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}