import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter Component', () => {
    // test('Debe hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    test('h2 debe tener el valor por defecto', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.find('h2').exists()).toBeTruthy();
        const h2 = wrapper.find('h2');
        expect(h2.text()).toBe('Counter');
    });

    test('El valor por defecto debe ser 100 en el p', () => {
        // const wrapper = shallowMount(Counter);
        // const pTags = wrapper.findAll('p');
        // expect(pTags[1].text()).toBe('30');
        const wrapper = shallowMount(Counter);
        const value = wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe('30');
    });
})