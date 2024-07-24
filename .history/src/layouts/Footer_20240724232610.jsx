import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/img/rekiteku-logo-white.svg";
import fb from "../assets/img/Facebook logo.svg";
import insta from "../assets/img/Instagram logo.svg";
import x from "../assets/img/X logo.svg";
import note from "../assets/img/Note Logo.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
	const { loading, data } = useApi();
	const [footers, setFooters] = useState([]);
	useEffect(() => {
		if (data && data.footer) {
			setFooters(data.footer);
		}
	}, [data]);

	return (
		<>
			{loading ? (
				<div className="skeleton"></div>
			) : (
				<>
					{footers && (
						<footer className=" bg-secondaryColor mt-[100px] pt-[50px] pb-[16px]">
							{/* ロゴ・SNS・連絡先のWrap */}
							<div className="container flex justify-between gap-x-16">
								{/* 左半分 ロゴとSNS */}
								<div className="flex flex-col gap-y-6">
									{/* ロゴと企業名 */}
									<div className="flex items-center gap-x-6">
										<img
											src={`${logo}`}
											alt="歴てくのロゴ"
										/>
										<div>
											<p className="mb-2 text-[28px] font-bold text-white">
												{footers.companyName}
											</p>
											<p className="text-lg font-bold text-white opacity-70">
												{`${footers.slogan}`}
											</p>
										</div>
										{/* <p className="text-4xl font-bold text-white">
                                            歴てく
                                            <span className="text-2xl">
                                                -INSIDE-
                                            </span>
                                        </p> */}
									</div>
									{/* SNS */}
									<div>
										{footers.sns && (
											<ul className="flex items-center gap-x-6">
												<li>
													<a href={footers.sns.fb}>
														<img
															src={fb}
															alt="facebook"
														/>
													</a>
												</li>
												<li>
													<a href={footers.sns.insta}>
														<img
															src={insta}
															alt="instagram"
														/>
													</a>
												</li>
												<li>
													<a href={footers.sns.x}>
														<img src={x} alt="x" />
													</a>
												</li>
												<li>
													<a href={footers.sns.note}>
														<img
															src={note}
															alt="note"
														/>
													</a>
												</li>
											</ul>
										)}
									</div>
								</div>
								{/* 右半分 連絡先 */}
								<div className="flex flex-col gap-y-8">
									<div>
										<span className="text-lg text-slate-300">
											メール
										</span>
										<p className="text-base text-white">
											{footers.email}
										</p>
									</div>
									<div className="flex gap-x-16">
										<div>
											<span className="text-lg text-slate-300">
												電話番号
											</span>
											<p className="text-lg text-white ">
												{footers.phone}
											</p>
										</div>
										<div>
											<span className="text-lg text-slate-300">
												住所
											</span>
											<p className="text-lg text-white ">
												{footers.address}
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* プライバシポリシー系 */}
							<div className="my-8">
								<ul className="flex justify-center text-base font-thin text-white gap-x-20">
									<li>
										<NavLink to={"/travelAgencyAgreement"}>
											旅行業約款
										</NavLink>
									</li>
									<li>
										<NavLink to={"/PrivacyPolicyPage"}>
											プライバシーポリシー
										</NavLink>
									</li>
									<li>
										国内旅行業務取扱管理者第〇〇〇〇-〇〇〇〇号
									</li>
								</ul>
							</div>
							{/* copylight */}
							<p className="text-sm text-center">
								<small className="text-slate-300">
									{footers.copyright}
								</small>
							</p>
						</footer>
					)}
				</>
			)}
		</>
	);
}
