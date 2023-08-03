'use client';

import React from 'react';
import { ReactTableScroll } from 'react-table-scroll';
import { Container } from 'react-bootstrap';

const Page = () => {
    return (
        <>
            <Container className="mt-4">
                <h1>Basic layer example</h1>
                <div className="table-container">
                    <ReactTableScroll>
                        <div>
                            <p style={{ width: 600 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra urna vitae velit eleifend sodales
                                eget a metus. Vestibulum arcu nisi, vulputate a pellentesque in, auctor vel sem. In hac habitasse platea
                                dictumst. Nunc tincidunt nulla tempus diam imperdiet blandit. Morbi placerat sagittis dolor, quis posuere
                                dolor tempor nec. Pellentesque vitae dictum felis, a tempus dui. Pellentesque eget augue eu erat
                                sollicitudin tincidunt nec nec urna. Mauris interdum dapibus turpis, nec pellentesque metus scelerisque eu.
                                Donec sit amet tellus at erat aliquam auctor. Suspendisse aliquet odio et tortor pulvinar, vitae vestibulum
                                mauris bibendum. Vestibulum quis metus eros. Vivamus ullamcorper ipsum nisi, non vehicula dolor faucibus sit
                                amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur dignissim urna ac elit
                                facilisis mattis. Nam tincidunt vulputate interdum.
                            </p>
                            <p style={{ width: 800 }}>
                                Fusce nunc odio, mollis pellentesque risus sed, semper consectetur ipsum. Vestibulum maximus risus sed
                                luctus venenatis. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Fusce blandit lacus eget accumsan porta. Fusce tempor suscipit risus a pharetra. Nam
                                pharetra tincidunt ante, vitae placerat turpis fermentum pellentesque. Pellentesque pretium quam vitae ex
                                scelerisque, in cursus lorem ullamcorper. Quisque nunc arcu, commodo eget quam non, interdum euismod elit.
                                Cras faucibus erat ut purus placerat, semper tempus odio sollicitudin. Aliquam lacinia quis eros eget
                                venenatis. In congue sed arcu sit amet rhoncus.
                            </p>
                            <p style={{ width: 1000 }}>
                                Sed gravida vitae velit in fermentum. Duis bibendum tortor eu ullamcorper volutpat. Vestibulum sit amet dui
                                sed metus egestas malesuada nec id leo. In et accumsan erat, eget condimentum nisi. Vestibulum quis placerat
                                massa, eu auctor ex. Suspendisse in egestas massa. Aenean sodales mattis nisl sed blandit. Fusce hendrerit
                                dignissim sem in molestie. Sed nec diam a ante accumsan hendrerit. Duis ut diam quis quam porta venenatis.
                                Nulla a libero sagittis, blandit leo eget, porta urna. Praesent rhoncus eleifend egestas. Etiam eget augue
                                interdum erat laoreet semper.
                            </p>
                            <p>
                                Etiam porta, magna sed eleifend ultricies, nibh est laoreet orci, quis hendrerit risus sapien vitae urna. Ut
                                dolor dolor, rutrum a feugiat ullamcorper, malesuada eget purus. Proin ipsum purus, congue in tortor vitae,
                                aliquet aliquet orci. Aenean tempus ante quis metus congue, ac aliquam arcu lobortis. Praesent rhoncus
                                eleifend ipsum vitae accumsan. Nam sit amet leo molestie, fermentum urna a, imperdiet urna. Fusce dapibus
                                posuere ex, at euismod erat dictum nec. Integer condimentum lectus risus, eu finibus magna feugiat eget.
                                Proin interdum ligula in neque convallis, a posuere nunc feugiat. Proin id tempus massa. Phasellus sem
                                justo, consequat nec tortor ut, auctor pellentesque arcu.
                            </p>
                            <p>
                                Curabitur luctus tellus sed orci accumsan, sit amet semper lorem pharetra. Curabitur commodo elementum
                                turpis, id finibus ligula fringilla a. Quisque vel nibh vestibulum, vestibulum ex ac, imperdiet eros. Orci
                                varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut iaculis, neque sit amet
                                ultrices mattis, est ligula condimentum libero, eu commodo nisi urna sit amet lacus. In gravida enim justo,
                                sit amet accumsan magna iaculis eu. Praesent eu cursus metus. Donec vitae nisl sit amet risus tristique
                                sagittis. Aliquam erat volutpat. Aenean imperdiet mi eget consectetur pulvinar. Aliquam molestie eget augue
                                id ultricies. Vivamus in purus vitae ligula euismod sodales at pellentesque tellus.
                            </p>
                            <p>
                                Mauris venenatis nibh ante, ac blandit urna pellentesque sit amet. Donec pellentesque augue odio, quis
                                laoreet justo ultrices vitae. Duis eget auctor dui, quis mollis leo. Nam luctus, justo in facilisis
                                faucibus, ante eros porttitor enim, ut efficitur tellus sem sed ante. Nulla ligula enim, malesuada vitae
                                rhoncus vitae, rutrum id purus. Nunc dictum laoreet magna, volutpat ultrices quam ultricies sit amet. Donec
                                consectetur nunc quis erat auctor, sed dictum ligula ornare. Pellentesque ut pellentesque dolor. Suspendisse
                                placerat lectus neque, quis tempus urna dapibus a. Sed interdum nisl elit, vel pharetra turpis finibus in.
                                Cras rhoncus porta turpis, in dignissim arcu finibus ac. Etiam ut justo quis lorem consectetur sollicitudin
                                vel sed augue. Sed et lorem eget erat luctus mollis. Donec vitae luctus sapien, a rutrum libero.
                            </p>
                        </div>
                    </ReactTableScroll>
                </div>
            </Container>
        </>
    );
};

export default Page;
